import React, { useState } from 'react'
import vehiculos from '../components/vehiculos'
import tasas from '../components/tasas'

const useVehicularCalculator = () => {
    const calculateInsurance = (formData) => {
        const { edad_carro, suma_asegurar, marca_carro, modelo_carro } = formData
        let currentTier
        let results = []

        Object.entries(vehiculos).forEach(([brand, models]) => {
            if (brand === marca_carro) {
                Object.entries(models).forEach(([tier, modelsForTier]) => {
                    if (modelsForTier.includes(modelo_carro)) {
                        currentTier = tier
                    }
                })
            }
        })

        if (!currentTier) {
            console.error('Tier not found for the selected car brand and model')
            return null
        }

        Object.entries(tasas).forEach(([insuranceCompany, tiers]) => {
            Object.entries(tiers).forEach(([tier, rates]) => {
                if (tier === currentTier) {
                    const insuranceRate = rates[edad_carro]
                    console.log(`${insuranceCompany} - Tier: ${tier}, Insurance Rate: ${insuranceRate}`)

                    const result = {
                        key: insuranceCompany,
                        predictedFee: (insuranceRate / 1000) * suma_asegurar * 1.2154,
                        type: 'vehicular'
                    }

                    results.push(result)
                }
            })
        })

        return results
    }

    const [insurancePrice, setInsurancePrice] = useState(null)

    const calculatePrice = (formData) => {
        return new Promise((resolve) => {
            const price = calculateInsurance(formData)
            setInsurancePrice(price)
            resolve(price)
        })
    }

    return { insurancePrice, calculatePrice }
}

export default useVehicularCalculator
