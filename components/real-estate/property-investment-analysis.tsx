import { TrendingUp, DollarSign, Percent, Calculator, PieChart, BarChart3 } from "lucide-react"

interface InvestmentMetrics {
  purchasePrice: number
  monthlyRent: number
  annualRent: number
  expenses: {
    propertyTax: number
    insurance: number
    maintenance: number
    management: number
    vacancy: number
  }
  financing: {
    downPayment: number
    loanAmount: number
    interestRate: number
    monthlyPayment: number
  }
  returns: {
    grossYield: number
    netYield: number
    capRate: number
    cashFlow: number
    roi: number
  }
}

interface PropertyInvestmentAnalysisProps {
  metrics: InvestmentMetrics
}

export function PropertyInvestmentAnalysis({ metrics }: PropertyInvestmentAnalysisProps) {
  const totalAnnualExpenses = metrics?.expenses
    ? Object.values(metrics.expenses).reduce((sum, expense) => sum + (expense || 0), 0)
    : 0
  const netAnnualIncome = (metrics?.annualRent || 0) - totalAnnualExpenses
  const monthlyCashFlow = netAnnualIncome / 12 - (metrics?.financing?.monthlyPayment || 0)

  const getReturnColor = (value: number, type: "percentage" | "cash") => {
    if (type === "percentage") {
      if (value >= 8) return "text-green-600"
      if (value >= 5) return "text-amber-600"
      return "text-red-600"
    } else {
      if (value >= 0) return "text-green-600"
      return "text-red-600"
    }
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5 text-cyan-600" />
        <h3 className="text-lg font-semibold">Investment Analysis</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Metrics */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Key Investment Metrics</h4>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Percent className="h-4 w-4 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-800">Gross Yield</span>
              </div>
              <div className={`text-xl font-bold ${getReturnColor(metrics?.returns?.grossYield || 0, "percentage")}`}>
                {(metrics?.returns?.grossYield || 0).toFixed(2)}%
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Net Yield</span>
              </div>
              <div className={`text-xl font-bold ${getReturnColor(metrics?.returns?.netYield || 0, "percentage")}`}>
                {(metrics?.returns?.netYield || 0).toFixed(2)}%
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Cap Rate</span>
              </div>
              <div className={`text-xl font-bold ${getReturnColor(metrics?.returns?.capRate || 0, "percentage")}`}>
                {(metrics?.returns?.capRate || 0).toFixed(2)}%
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">ROI</span>
              </div>
              <div className={`text-xl font-bold ${getReturnColor(metrics?.returns?.roi || 0, "percentage")}`}>
                {(metrics?.returns?.roi || 0).toFixed(2)}%
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="h-4 w-4 text-gray-600" />
              <span className="font-medium text-gray-900">Monthly Cash Flow</span>
            </div>
            <div className={`text-2xl font-bold ${getReturnColor(monthlyCashFlow, "cash")}`}>
              ${monthlyCashFlow >= 0 ? "+" : ""}
              {monthlyCashFlow.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 mt-1">After all expenses and financing</div>
          </div>
        </div>

        {/* Financial Breakdown */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Financial Breakdown</h4>

          {/* Income */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h5 className="font-medium text-green-800 mb-3">Monthly Income</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-green-700">Rental Income</span>
                <span className="font-medium text-green-900">${(metrics?.monthlyRent || 0).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Expenses */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h5 className="font-medium text-red-800 mb-3">Monthly Expenses</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-red-700">Property Tax</span>
                <span className="font-medium text-red-900">
                  ${((metrics?.expenses?.propertyTax || 0) / 12).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-red-700">Insurance</span>
                <span className="font-medium text-red-900">
                  ${((metrics?.expenses?.insurance || 0) / 12).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-red-700">Maintenance</span>
                <span className="font-medium text-red-900">
                  ${((metrics?.expenses?.maintenance || 0) / 12).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-red-700">Management</span>
                <span className="font-medium text-red-900">
                  ${((metrics?.expenses?.management || 0) / 12).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-red-700">Vacancy Reserve</span>
                <span className="font-medium text-red-900">
                  ${((metrics?.expenses?.vacancy || 0) / 12).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-red-700">Mortgage Payment</span>
                <span className="font-medium text-red-900">
                  ${(metrics?.financing?.monthlyPayment || 0).toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between">
                  <span className="font-medium text-red-800">Total Expenses</span>
                  <span className="font-bold text-red-900">
                    ${(totalAnnualExpenses / 12 + (metrics?.financing?.monthlyPayment || 0)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Summary */}
          <div className="bg-gray-50 border rounded-lg p-4">
            <h5 className="font-medium text-gray-800 mb-3">Investment Summary</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Purchase Price</span>
                <span className="font-medium">${(metrics?.purchasePrice || 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Down Payment</span>
                <span className="font-medium">${(metrics?.financing?.downPayment || 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Amount</span>
                <span className="font-medium">${(metrics?.financing?.loanAmount || 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Interest Rate</span>
                <span className="font-medium">{metrics?.financing?.interestRate || 0}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Recommendations */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-medium text-gray-900 mb-3">Investment Recommendations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(metrics?.returns?.capRate || 0) >= 6 ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-green-800">Strong Investment</div>
                  <div className="text-xs text-green-700">Cap rate above 6% indicates good returns</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Calculator className="h-4 w-4 text-amber-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-amber-800">Consider Negotiation</div>
                  <div className="text-xs text-amber-700">Cap rate below 6% - negotiate price or increase rent</div>
                </div>
              </div>
            </div>
          )}

          {monthlyCashFlow >= 0 ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <DollarSign className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-green-800">Positive Cash Flow</div>
                  <div className="text-xs text-green-700">Property generates monthly income</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <PieChart className="h-4 w-4 text-red-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-red-800">Negative Cash Flow</div>
                  <div className="text-xs text-red-700">
                    Monthly shortfall of ${Math.abs(monthlyCashFlow).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
