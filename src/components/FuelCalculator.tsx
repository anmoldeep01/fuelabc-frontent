"use client";

import { useState } from "react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Calculator, TrendingDown, Droplets, IndianRupee, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export function FuelCalculator() {
    const [distance, setDistance] = useState<string>("50");
    const [mileage, setMileage] = useState<string>("15");
    const [fuelPrice, setFuelPrice] = useState<string>("100");
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ distance?: string; mileage?: string; fuelPrice?: string }>({});

    const validateInputs = () => {
        const newErrors: typeof errors = {};

        const dist = parseFloat(distance) || 0;
        const mil = parseFloat(mileage) || 0;
        const price = parseFloat(fuelPrice) || 0;

        if (!distance || dist <= 0 || dist > 1000) {
            newErrors.distance = "Please enter a valid distance between 1-1000 km";
        }
        if (!mileage || mil <= 0 || mil > 100) {
            newErrors.mileage = "Please enter a valid mileage between 1-100 km/L";
        }
        if (!fuelPrice || price <= 0 || price > 500) {
            newErrors.fuelPrice = "Please enter a valid fuel price between ₹1-500/L";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const calculateSavings = () => {
        if (!validateInputs()) return;

        setLoading(true);
        // Simulate API call or processing
        setTimeout(() => {
            setShowResults(true);
            setLoading(false);
        }, 500);
    };

    const getCurrentCost = () => {
        const dist = parseFloat(distance) || 0;
        const mil = parseFloat(mileage) || 0;
        const price = parseFloat(fuelPrice) || 0;

        const dailyFuel = dist / mil;
        const dailyCost = dailyFuel * price;
        const monthlyCost = dailyCost * 30;

        return { dailyFuel, dailyCost, monthlyCost };
    };

    const getSavings = () => {
        const current = getCurrentCost();
        const savingsPercent = 0.3; // 30% savings

        const savedFuel = current.dailyFuel * savingsPercent;
        const savedMoney = current.dailyCost * savingsPercent;
        const monthlySavings = savedMoney * 30;
        const yearlySavings = monthlySavings * 12;

        return {
            dailyFuel: savedFuel.toFixed(1),
            monthlyFuel: (savedFuel * 30).toFixed(1),
            dailyMoney: savedMoney.toFixed(0),
            monthlyMoney: monthlySavings.toFixed(0),
            yearlyMoney: yearlySavings.toFixed(0),
        };
    };

    const savings = getSavings();

    return (
        <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimation animation="fadeUp">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark text-sm font-medium mb-4">
                            <Calculator className="w-4 h-4" aria-hidden="true" />
                            Savings Calculator
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary-dark">
                            Calculate Your Potential Savings
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            See how much fuel and money you could save with FUELabc&apos;s smart fuel management.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Input Section */}
                        <ScrollAnimation animation="fadeUp" delay={0.1}>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold font-heading mb-6 text-primary-dark flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-primary" aria-hidden="true" />
                                    Your Vehicle Details
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Daily Commute (km)
                                        </label>
                                        <Input
                                            type="number"
                                            value={distance}
                                            onChange={(e) => {
                                                setDistance(e.target.value);
                                                setErrors(prev => ({ ...prev, distance: undefined }));
                                            }}
                                            placeholder="50"
                                            min="0"
                                            className={errors.distance ? "border-red-500" : ""}
                                            aria-invalid={!!errors.distance}
                                            aria-describedby={errors.distance ? "distance-error" : undefined}
                                        />
                                        {errors.distance && (
                                            <p id="distance-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.distance}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Current Mileage (km/L)
                                        </label>
                                        <Input
                                            type="number"
                                            value={mileage}
                                            onChange={(e) => {
                                                setMileage(e.target.value);
                                                setErrors(prev => ({ ...prev, mileage: undefined }));
                                            }}
                                            placeholder="15"
                                            min="0"
                                            step="0.1"
                                            className={errors.mileage ? "border-red-500" : ""}
                                            aria-invalid={!!errors.mileage}
                                            aria-describedby={errors.mileage ? "mileage-error" : undefined}
                                        />
                                        {errors.mileage && (
                                            <p id="mileage-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.mileage}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Fuel Price (₹/L)
                                        </label>
                                        <Input
                                            type="number"
                                            value={fuelPrice}
                                            onChange={(e) => {
                                                setFuelPrice(e.target.value);
                                                setErrors(prev => ({ ...prev, fuelPrice: undefined }));
                                            }}
                                            placeholder="100"
                                            min="0"
                                            step="0.1"
                                            className={errors.fuelPrice ? "border-red-500" : ""}
                                            aria-invalid={!!errors.fuelPrice}
                                            aria-describedby={errors.fuelPrice ? "price-error" : undefined}
                                        />
                                        {errors.fuelPrice && (
                                            <p id="price-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.fuelPrice}
                                            </p>
                                        )}
                                    </div>
                                    <Button
                                        onClick={calculateSavings}
                                        className="w-full rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40"
                                        size="lg"
                                        loading={loading}
                                    >
                                        {!loading && <Calculator className="mr-2 h-5 w-5" aria-hidden="true" />}
                                        Calculate Savings
                                    </Button>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Results Section */}
                        <ScrollAnimation animation="fadeUp" delay={0.2}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={showResults ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-br from-primary-dark to-primary text-white rounded-3xl p-8 shadow-2xl"
                            >
                                <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                                    <TrendingDown className="w-6 h-6" aria-hidden="true" />
                                    Your Potential Savings
                                </h3>

                                <div className="space-y-6">
                                    {/* Monthly Savings - Primary */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <IndianRupee className="w-5 h-5" aria-hidden="true" />
                                            <span className="text-sm font-medium opacity-90">Monthly Savings</span>
                                        </div>
                                        <div className="text-5xl font-bold font-mono">₹{savings.monthlyMoney}</div>
                                        <p className="text-sm opacity-75 mt-2">Based on 30% fuel efficiency improvement</p>
                                    </div>

                                    {/* Additional Stats */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Droplets className="w-4 h-4" aria-hidden="true" />
                                                <span className="text-xs opacity-75">Monthly Fuel</span>
                                            </div>
                                            <div className="text-2xl font-bold">{savings.monthlyFuel}L</div>
                                            <p className="text-xs opacity-75 mt-1">saved</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                            <div className="flex items-center gap-2 mb-1">
                                                <IndianRupee className="w-4 h-4" aria-hidden="true" />
                                                <span className="text-xs opacity-75">Yearly Savings</span>
                                            </div>
                                            <div className="text-2xl font-bold">₹{(parseFloat(savings.yearlyMoney) / 1000).toFixed(1)}K</div>
                                            <p className="text-xs opacity-75 mt-1">per year</p>
                                        </div>
                                    </div>

                                    {showResults && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="pt-4 border-t border-white/20"
                                        >
                                            <p className="text-sm opacity-90 text-center">
                                                🎉 You could save enough to fund {Math.floor(parseFloat(savings.yearlyMoney) / 500)} additional trips per year!
                                            </p>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </ScrollAnimation>
                    </div>

                    {/* Trust Indicator */}
                    <ScrollAnimation animation="fadeUp" delay={0.3}>
                        <div className="mt-12 text-center">
                            <p className="text-sm text-muted-foreground">
                                * Based on average 30% fuel efficiency improvement reported by FUELabc users
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
