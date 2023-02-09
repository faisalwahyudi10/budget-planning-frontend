<template>
     <section class="py-[200px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark mb-4">Pilih Program</div>
        <div class="w-[30%] card">
            <div class="form-group">
                <label for="" class="text-grey">Program</label>

                <p v-if="$fetchState.pending">Fetching programs...</p>
                <select v-else v-model="selectedProgram" name="programs" id="" class="appearance-none input-field form-icon-chevron_down">
                    <option :value="program.id" v-for="program in programs">
                        {{ program.name }}
                    </option>
                </select>
            </div>
            <button @click="openProgram()" type="button" class="w-full btn btn-primary mt-[14px]">
                Lanjutkan
            </button>
            
        </div>
     </section>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'form',
    data() {
      return {
          programs: [],
          selectedProgram: '',
      }
    },
    fetch() {
      this.programs = this.$axios.get('/program', {
                params: {
                    date_program: this.$route.params.year,
                    limit: 100,
                }
            })
      .then(({ data }) => {
                    this.programs = data.result.data
                }) 
    },
    methods: {
        openProgram() {
            this.$router.push({
                name: 'year-id',
                params: {
                    id: this.selectedProgram,
                },
            })
        },
    }
}
</script>