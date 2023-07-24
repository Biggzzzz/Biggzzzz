let toastBox = document.querySelector('#toast')
const ButtonSubmit = document.querySelector('.ButtonSubmit')

TextBox.value = ""

function noteAdd(){
    const list = document.querySelector('.list') 

    ButtonSubmit.addEventListener('click', ()=>{
        if(TextBox.value !== ""){
            const Label = document.createElement('label')
            Label.className = "label"

            const input = document.createElement('input')
            input.type = 'checkbox'
            input.className = 'check'
            input.id = 'checkbox'
            Label.appendChild(input)

            const sup = document.createElement('i')
            sup.className = "fas fa-trash"
            Label.append(sup)
    
            const span = document.createElement('span')
            span.innerHTML = TextBox.value
            Label.appendChild(span)
    
            list.appendChild(Label)
            TextBox.value = ''

            sup.addEventListener('click', ()=>{
                list.removeChild(Label)
            })
        }
        else{
            showToast()
        }
    })

}

let ToastBox = document.querySelector('#toastBox')

function showToast(){
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>Le champ est vide'
    ToastBox.appendChild(toast)

    setTimeout(()=>{
        toast.remove()
    },6000)
}
noteAdd()