// // /components/MainContainer.tsx
// import React from "react"

// const MainContainer: React.FC = () => {
//   return (
//     <div className="h-dvh w-full flex flex-col md:flex-row gap-4 mt-5 mb-5">
        
//       {/* Primer contenedor */}
//       <div className=" flex-1 h-full p-4 bg-gray-100 rounded-md shadow-md">
//         {/* Contenido del primer contenedor */}
//       </div>

//       {/* Contenedor central, visible solo en tablet y desktop */}
//       <div className="hidden md:flex md:flex-1 md:w-1/3 h-full p-4 bg-gray-200 rounded-md shadow-md">
//         {/* Contenido del contenedor central */}
//       </div>

//       {/* Segundo contenedor */}
//       <div className="flex-1 h-full p-4 bg-gray-100 rounded-md shadow-md">
//         {/* Contenido del segundo contenedor */}
//       </div>
//     </div>
//   )
// }

// export default MainContainer


// src/components/MainContainer.tsx
import React from "react"

const MainContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full  md:flex-row flex-1 gap-4 mt-5 mb-16 md:mb-5 ">
      {/* Primer contenedor */}
      <div className="flex-1 p-4 bg-gray-100 rounded-md shadow-md">
        {/* Contenido del primer contenedor */}
      </div>

      {/* Contenedor central, visible solo en tablet y desktop */}
      <div className="hidden md:flex md:flex-1 md:w-1/3 p-4 bg-gray-200 rounded-md shadow-md">
        {/* Contenido del contenedor central */}
      </div>

      {/* Segundo contenedor */}
      <div className="flex-1 p-4 bg-gray-100 rounded-md shadow-md">
        {/* Contenido del segundo contenedor */}
      </div>
    </div>
  )
}

export default MainContainer
