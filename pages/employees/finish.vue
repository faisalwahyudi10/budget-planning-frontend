<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">Upload Foto</div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Upload Foto Anda <br />
        </p>
        <form enctype="multipart/form-data" class="w-full card">
            <div class="flex flex-col items-center mb-[14px]">
                <img :src="file" width="150" height="150" class="rounded-full" alt="" />
                <div class="mt-6 mb-1 text-lg font-semibold">{{ this.$store.state.employee.name }}</div>
                <p class="text-base text-grey">{{ this.$store.state.employee.nik }}</p>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Upload Foto</label>
                <input type="file" ref="file" name="image" class="input-field" @change="getImage"/>
            </div>
            <div class="flex justify-center">
                <button type="button" @click="createEmployee()" id="continueBtn" class="btn btn-primary">
                    Simpan
                </button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    layout: 'form',
    middleware: 'auth',
    data() {
        return {
            photo: '',
            file: '',
        };
    },
    methods: {
        getImage(e){
                console.log(e.target.files[0]);
                this.photo = this.$refs.file.files[0];
                this.file = e.target.files[0]
                let reader = new FileReader();
                reader.readAsDataURL(this.file);
                reader.onload = e => {
                    this.file = e.target.result;
                };
                
            },
        async createEmployee() {
            try {
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                let formData = new FormData();
                formData.append("name", this.$store.state.employee.name);
                formData.append("nik", this.$store.state.employee.nik);
                formData.append("gender", this.$store.state.employee.gender);
                formData.append("position", this.$store.state.employee.position);
                formData.append("birth_date", this.$store.state.employee.birthDate);
                formData.append("phone", this.$store.state.employee.phone);
                formData.append("photo", this.photo);   
                formData.append("email", this.$store.state.employee.email);
                formData.append("address", this.$store.state.employee.address);

                // Send Registration Data to Server
                
                let response = await this.$axios.post('/employee', formData, config) .then(response => {
                        let dataForm = new FormData();
                        dataForm.append("username", this.$store.state.employee.username);
                        dataForm.append("password", this.$store.state.employee.password);
                        dataForm.append("role", this.$store.state.employee.role);
                        dataForm.append("employee_id", response.data.result.id);
                        console.log(response)
                        this.$axios.post('/user', dataForm)
                    })

                // Clear Registration Data
                this.$store.commit('employee/updateName', '')
                this.$store.commit('employee/updateNik', '')
                this.$store.commit('employee/updateGender', '')
                this.$store.commit('employee/updatePosition', '')
                this.$store.commit('employee/updateBirthDate', '')
                this.$store.commit('employee/updatePhone', '')
                this.$store.commit('employee/updateEmail', '')
                this.$store.commit('employee/updateAddress', '')

                // Redirect to employee page
                this.$router.push({
                    name: 'employees',
                })

                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
    }
}
</script>