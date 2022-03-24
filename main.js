let dez = 0
        let uni = 0

        const doom = setInterval(() => {
            time()
        },1)


        function time() {
            uni++
            
            if(uni === 99) {
                dez--
                uni = 0
            }

            console.log(dez)
            let time = document.getElementById('time')
            time.innerHTML = `R$ ${dez},${uni}`
        }

