import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function CheckBoxRow( { user }:{user :string} ) {
  const [permissions,setPermissions] = useState({
    read:false,
    write:false,
    delete:false,
  });

  const [deleteChecked,setDeleteChecked] = useState(false);
  function handleDelete(isChecked:boolean){
    setPermissions({read:isChecked,write:isChecked,delete:isChecked});
    setDeleteChecked(isChecked);
  }
  function handleWrite(isChecked:boolean){
    if(!deleteChecked){
      setPermissions({...permissions,write:isChecked});
    }
    else{
      setPermissions({...permissions,write:isChecked,delete:false});
    }
  }
  function handleRead(isChecked:boolean){
      setPermissions({...permissions,read:isChecked});   

  }

  return(
    <>
      User {user}
      <input type="checkbox" 
      checked={permissions.read}
      onChange={(i)=> handleRead(i.currentTarget.checked)}>
      </input>
      <input type="checkbox"
      checked={permissions.write}
      onChange={(i) => handleWrite(i.currentTarget.checked)}      >
      </input>
      <input type="checkbox" 
      checked={permissions.delete}
      onChange={(i) => handleDelete(i.currentTarget.checked)}></input>
  </>
  )

}

function App() {

  return (
    <div className="App">
      <div className="table">
        <span></span>
        <span>Read </span>
        <span>Write</span>
        <span>Delete</span>
        <CheckBoxRow user={"1"}/>
        <CheckBoxRow user={"2"}/>
        <CheckBoxRow user={"3"}/>
      </div>
    </div>
  )
}

export default App
