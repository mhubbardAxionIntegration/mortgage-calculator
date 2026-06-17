import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import {
  formatCurrency,
  formatPercent,
  buildMonthlyAmortizationSchedule,
  type MortgageInputs,
  type PaymentBreakdown,
  type AmortizationYear,
} from "./mortgage";
import { SITE, COMPANY } from "./site";

const EMERALD: [number, number, number] = [5, 150, 105];
const SLATE: [number, number, number] = [15, 23, 42];
const MUTED: [number, number, number] = [100, 116, 139];

/**
 * Generates and downloads a branded PDF report of the mortgage estimate and
 * full year-by-year amortization schedule. Runs entirely in the browser.
 */
export function downloadAmortizationPdf(
  inputs: MortgageInputs,
  result: PaymentBreakdown,
  schedule: AmortizationYear[],
): void {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = 54;

  // Header band
  doc.setFillColor(...EMERALD);
  doc.rect(0, 0, pageWidth, 8, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...SLATE);
  doc.text("Mortgage Payment Report", margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...MUTED);
  y += 18;
  doc.text(`${SITE.name} · Generated ${new Date().toLocaleDateString("en-US")}`, margin, y);

  // Headline payment
  y += 34;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...MUTED);
  doc.text("Estimated monthly payment", margin, y);
  y += 24;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(...EMERALD);
  doc.text(formatCurrency(result.totalMonthly), margin, y);

  // Loan summary table
  y += 24;
  autoTable(doc, {
    startY: y,
    theme: "plain",
    styles: { fontSize: 10, cellPadding: 3, textColor: SLATE },
    columnStyles: {
      0: { textColor: MUTED },
      2: { textColor: MUTED },
    },
    body: [
      ["Home price", formatCurrency(inputs.homePrice), "Loan amount", formatCurrency(result.loanAmount)],
      ["Down payment", `${formatCurrency(inputs.downPayment)} (${formatPercent(result.downPaymentPercent, 0)})`, "Interest rate", formatPercent(inputs.annualRate)],
      ["Loan term", `${inputs.termYears} years`, "Total interest", formatCurrency(result.totalInterest)],
      ["Property tax", `${formatCurrency(result.monthlyTax)}/mo`, "Home insurance", `${formatCurrency(result.monthlyInsurance)}/mo`],
      ["PMI", result.monthlyPmi > 0 ? `${formatCurrency(result.monthlyPmi)}/mo` : "None", "HOA dues", `${formatCurrency(result.monthlyHoa)}/mo`],
    ],
  });

  // Monthly payment breakdown heading
  // @ts-expect-error - lastAutoTable is added by the autotable plugin at runtime
  y = (doc.lastAutoTable?.finalY ?? y) + 28;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...SLATE);
  doc.text("Amortization schedule (by year)", margin, y);

  // Amortization table
  autoTable(doc, {
    startY: y + 10,
    head: [["Year", "Principal", "Interest", "Remaining balance"]],
    body: schedule.map((row) => [
      String(row.year),
      formatCurrency(row.principalPaid),
      formatCurrency(row.interestPaid),
      formatCurrency(row.endingBalance),
    ]),
    styles: { fontSize: 9, cellPadding: 4 },
    headStyles: { fillColor: EMERALD, textColor: [255, 255, 255], fontStyle: "bold" },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    columnStyles: {
      1: { halign: "right" },
      2: { halign: "right" },
      3: { halign: "right" },
    },
    margin: { left: margin, right: margin },
  });

  // Detailed month-by-month schedule on a fresh page
  const monthly = buildMonthlyAmortizationSchedule(
    result.loanAmount,
    inputs.annualRate,
    inputs.termYears,
  );

  if (monthly.length > 0) {
    doc.addPage();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...SLATE);
    doc.text("Monthly amortization schedule", margin, 54);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text(
      `${monthly.length} payments of ${formatCurrency(result.principalAndInterest, 2)} (principal & interest)`,
      margin,
      70,
    );

    autoTable(doc, {
      startY: 82,
      head: [["#", "Month", "Principal", "Interest", "Balance"]],
      body: monthly.map((row) => [
        String(row.month),
        row.label,
        formatCurrency(row.principalPaid, 2),
        formatCurrency(row.interestPaid, 2),
        formatCurrency(row.endingBalance),
      ]),
      styles: { fontSize: 7.5, cellPadding: 2.5 },
      headStyles: { fillColor: EMERALD, textColor: [255, 255, 255], fontStyle: "bold" },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      columnStyles: {
        2: { halign: "right" },
        3: { halign: "right" },
        4: { halign: "right" },
      },
      margin: { left: margin, right: margin },
    });
  }

  // Footer / disclaimer on every page
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const h = doc.internal.pageSize.getHeight();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED);
    doc.text(
      `Estimates only — not financial advice or a loan offer. © ${SITE.year} ${COMPANY.name}.`,
      margin,
      h - 24,
      { maxWidth: pageWidth - margin * 2 },
    );
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, h - 24, { align: "right" });
  }

  savePdf(doc, "mortgage-amortization-report.pdf");
}

/** Trigger a PDF download in a way that works in mobile in-app browsers. */
function savePdf(doc: import("jspdf").jsPDF, filename: string) {
  try {
    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.rel = "noopener";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch {
    doc.save(filename);
  }
}
