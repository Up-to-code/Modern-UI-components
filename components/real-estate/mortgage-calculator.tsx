"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react"
import { useState } from "react"

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(20)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)

  const loanAmount = homePrice - (homePrice * downPayment) / 100
  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Mortgage Calculator
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Home Price */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Home Price
          </Label>
          <Input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            placeholder="500,000"
          />
        </div>

        {/* Down Payment */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <Percent className="h-4 w-4" />
            Down Payment: {downPayment}%
          </Label>
          <Slider
            value={[downPayment]}
            onValueChange={(value) => setDownPayment(value[0])}
            max={50}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="text-sm text-muted-foreground">${((homePrice * downPayment) / 100).toLocaleString()}</div>
        </div>

        {/* Interest Rate */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Percent className="h-4 w-4" />
            Interest Rate (%)
          </Label>
          <Input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            placeholder="6.5"
          />
        </div>

        {/* Loan Term */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Loan Term (years)
          </Label>
          <Input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            placeholder="30"
          />
        </div>

        {/* Results */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Loan Amount:</span>
            <span className="font-semibold">${loanAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monthly Payment:</span>
            <span className="font-bold text-primary text-lg">
              ${isNaN(monthlyPayment) ? "0" : monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Interest:</span>
            <span className="font-semibold">
              $
              {isNaN(monthlyPayment)
                ? "0"
                : (monthlyPayment * numberOfPayments - loanAmount).toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
            </span>
          </div>
        </div>

        <Button className="w-full">Get Pre-Approved</Button>
      </CardContent>
    </Card>
  )
}
