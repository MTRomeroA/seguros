import React from "react"

const FormContainer = ({ title, description, total, children, icon }) => {

  return (
    <div className="mt-8 bg-white shadow-md rounded-lg p-8 w-[600px] mx-auto">
      <div>
        <div className="flex gap-4 items-start">
          {icon && (<div className="bg-blue-200 rounded-lg p-2 mt-1" >{icon}</div>)}
          <div>
            <h2 className="font-bold text-xl text-blue-800">{title}</h2>
            <p className="mb-4 text-slate-600">{description ? description : 'Descripción del item'}</p>
          </div>
        </div>
        {children}
      </div>
      
    </div>
  )
}

export default FormContainer
