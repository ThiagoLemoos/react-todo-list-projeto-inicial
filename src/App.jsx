import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { use, useState } from "react"
import ToDoContext from "./components/ToDoProvider/ToDoContext"
import { ToDoGroup } from "./components/ToDoGroup"
import { ToDoForm } from './components/ToDoForm'

// const todos = [
  
// //     id: 2,
// //     description: "Props, state e hooks",
// //     completed: false,
// //     createdAt: "2022-10-31"
// //   },
// //   {
// //     id: 3,
// //     description: "Ciclo de vida dos componentes",
// //     completed: false,
// //     createdAt: "2022-10-31"
// //   },
// //   {
// //     id: 4,
// //     description: "Testes unitários com Jest",
// //     completed: false,
// //     createdAt: "2022-10-31"
// //   }
// // ]
// // const completed = [
// //   {
// //     id: 5,
// //     description: "Controle de inputs e formulários controlados",
// //     completed: true,
// //     createdAt: "2022-10-31"
// //   },
// //   {
// //     id: 6,
// //     description: "Rotas dinâmicas",
// //     completed: true,
// //     createdAt: "2022-10-31"
// //   }
// ]

function App() {

  const [showDialog, setShowDialog] = useState(false);
  const { todos, addToDo } = use(ToDoContext)

  const handleFormSubmit = (formData) => {
    addToDo(formData)
    toggleDialog()
  }

  const toggleDialog = () => {
    setShowDialog(!showDialog)
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        
        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            items={todos.filter(t => !t.completed)}
          />

          <ToDoGroup
            heading="Concluído"
            items={todos.filter(t => t.completed)}
          />
          {/* <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.filter( t => !t.completed ).map(function (t) {
              return <ToDoItem 
                key={t.id} 
                item={t} 
                onToggleCompleted={toggleToDoCompleted}
                onDeleteTodo={deleteTodo} 
                />
            })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos.filter( t => t.completed ).map(function (t) {
              return <ToDoItem
                key={t.id} 
                item={t} 
                onToggleCompleted={toggleToDoCompleted}
                onDeleteTodo={deleteTodo} 
              />
            })}
          </ToDoList> */}
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog} >
              <ToDoForm onSubmit={handleFormSubmit} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
      
    </main>
  )
}

export default App
