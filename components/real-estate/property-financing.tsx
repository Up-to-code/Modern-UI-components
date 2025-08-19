"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, TrendingUp, DollarSign, Percent } from "lucide-react"

interface PropertyFinancingProps {
  propertyPrice: number
}

export function PropertyFinancing({ propertyPrice }: PropertyFinancingProps) {
  const [loanData, setLoanData] = useState({
    downPayment: propertyPrice * 0.2,
    loanTerm: "30",
    interestRate: "6.5",
    propertyTax: propertyPrice * 0.012,
    insurance: propertyPrice * 0.003,
    hoa: 0,
  })

  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const calculatePayment = () => {
    const principal = propertyPrice - loanData.downPayment
    const monthlyRate = Number.parseFloat(loanData.interestRate) / 100 / 12
    const numPayments = Number.parseInt(loanData.loanTerm) * 12

    const monthlyPrincipalInterest =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    const monthlyTax = loanData.propertyTax / 12
    const monthlyInsurance = loanData.insurance / 12
    const monthlyHOA = loanData.hoa

    const total = monthlyPrincipalInterest + monthlyTax + monthlyInsurance + monthlyHOA
    setMonthlyPayment(total)
  }

  const handleChange = (field: string, value: string | number) => {
    setLoanData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="h-5 w-5 text-cyan-600" />
        <h3 className="text-lg font-semibold">Financing Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="property-price">Property Price</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input id="property-price" type="number" value={propertyPrice} className="pl-10" disabled />
            </div>
          </div>

          <div>
            <Label htmlFor="down-payment">Down Payment</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="down-payment"
                type="number"
                value={loanData.downPayment}
                onChange={(e) => handleChange("downPayment", Number.parseFloat(e.target.value) || 0)}
                className="pl-10"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {((loanData.downPayment / propertyPrice) * 100).toFixed(1)}% of property price
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="loan-term">Loan Term</Label>
              <Select value={loanData.loanTerm} onValueChange={(value) => handleChange("loanTerm", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 years</SelectItem>
                  <SelectItem value="20">20 years</SelectItem>
                  <SelectItem value="25">25 years</SelectItem>
                  <SelectItem value="30">30 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="interest-rate">Interest Rate</Label>
              <div className="relative">
                <Percent className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="interest-rate"
                  type="number"
                  step="0.1"
                  value={loanData.interestRate}
                  onChange={(e) => handleChange("interestRate", e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="property-tax">Property Tax (Annual)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="property-tax"
                  type="number"
                  value={loanData.propertyTax}
                  onChange={(e) => handleChange("propertyTax", Number.parseFloat(e.target.value) || 0)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="insurance">Insurance (Annual)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="insurance"
                  type="number"
                  value={loanData.insurance}
                  onChange={(e) => handleChange("insurance", Number.parseFloat(e.target.value) || 0)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="hoa">HOA Fees (Monthly)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="hoa"
                type="number"
                value={loanData.hoa}
                onChange={(e) => handleChange("hoa", Number.parseFloat(e.target.value) || 0)}
                className="pl-10"
              />
            </div>
          </div>

          <Button onClick={calculatePayment} className="w-full">
            <Calculator className="h-4 w-4 mr-2" />
            Calculate Payment
          </Button>
        </div>

        <div className="space-y-4">
          {monthlyPayment > 0 && (
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-cyan-600" />
                <h4 className="font-semibold text-cyan-900">Monthly Payment Breakdown</h4>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Principal & Interest</span>
                  <span className="font-medium">
                    $
                    {(
                      ((propertyPrice - loanData.downPayment) *
                        (Number.parseFloat(loanData.interestRate) / 100 / 12) *
                        Math.pow(
                          1 + Number.parseFloat(loanData.interestRate) / 100 / 12,
                          Number.parseInt(loanData.loanTerm) * 12,
                        )) /
                      (Math.pow(
                        1 + Number.parseFloat(loanData.interestRate) / 100 / 12,
                        Number.parseInt(loanData.loanTerm) * 12,
                      ) -
                        1)
                    ).toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Property Tax</span>
                  <span className="font-medium">
                    ${(loanData.propertyTax / 12).toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Insurance</span>
                  <span className="font-medium">
                    ${(loanData.insurance / 12).toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </span>
                </div>

                {loanData.hoa > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">HOA Fees</span>
                    <span className="font-medium">
                      ${loanData.hoa.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                )}

                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-cyan-900">Total Monthly Payment</span>
                    <span className="text-xl font-bold text-cyan-600">
                      ${monthlyPayment.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Loan Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Amount</span>
                <span className="font-medium">${(propertyPrice - loanData.downPayment).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Down Payment</span>
                <span className="font-medium">${loanData.downPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Loan-to-Value Ratio</span>
                <span className="font-medium">
                  {(((propertyPrice - loanData.downPayment) / propertyPrice) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
