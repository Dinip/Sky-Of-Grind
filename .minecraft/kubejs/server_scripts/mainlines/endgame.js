ServerEvents.recipes(sog => {

sog.recipes.gtceu.electric_blast_furnace('inifnity')
.itemInputs('64x gtceu:infinity_catalyst_dust')
.itemInputs('64x gtceu:infinity_catalyst_dust')
.itemInputs('64x gtceu:infinity_catalyst_dust')
.inputFluids('gtceu:universium 16000')
.inputFluids('gtceu:stellar_matter_plasma 32000')
.inputFluids('gtceu:eternity 16000')
.inputFluids('gtceu:molten_space_time 8000')
.itemOutputs('avaritia:infinity_ingot')
.blastFurnaceTemp(15450)
.duration(1400)
.EUt(GTValues.VA[GTValues.OpV]);

// replicate similar recipe without kerosene
sog.recipes.gtceu.atomic_melting_module('molten_space_time')
.perTick(true)
.inputFluids('gtceu:hyper_ionized_helium_plasma 4')
.inputFluids('gtceu:californite 58')
.perTick(false)
.itemInputs('4x gtceu:space_time_ingot')
.chancedInput('2x gtceu:neutron_reflector', 3333, 0)
.chancedInput('2x gtceu:neutron_reflector', 2500, 0)
.chancedInput('2x gtceu:neutron_reflector', 1111, 0)
.outputFluids('gtceu:molten_space_time 144')
.duration(20*20)
.EUt(GTValues.VA[GTValues.OpV]);
})