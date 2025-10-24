import './to-do-form.style.css'

import { TextInput } from "../TextInput"
import { Button } from "../Button"

export function ToDoForm({ onSubmit }) {
    return (
        <form className='to-do-form' action={onSubmit}>
            <TextInput 
            placeholder="Digite o item que deseja adicionar"
            required
            />
            <Button>
                Salvar item
            </Button>
        </form>
    )
}