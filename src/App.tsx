import './App.css'
import CallbackHookUseCase from './components/CallbackHookUseCase'
import FormSplitting from './components/FormSplitting/FormSplitting'
import MemoizationUseCase from './components/MemoizationUseCase'
import MemoizedComponentUseCase from './components/MemoizedComponentUseCase'
import UserDetails from './components/UserDetails'
import UsersDataComponent from './components/UsersDataComponent'

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>React manual</h1>
      <UserDetails />
      <UsersDataComponent />
      <MemoizationUseCase />
      <CallbackHookUseCase />
      <MemoizedComponentUseCase />
      <FormSplitting />
    </div>
  )
}

export default App
