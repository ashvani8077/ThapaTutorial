// const genere=()=>{
//     const gen="Richard Devid";
//     return gen;
//   }
  
  
//  export const NetflixSeries=()=>{
//     const name="Shark Tale"
//     const rating=5.7;
//     const summery=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur et enim nihil, sit ea nam quasi ducimus perferendis, repellendus deserunt iste alias magnam earum, nostrum veniam placeat cumque fugit";
  
  
//     let age=16;
  
//   const canWatch=()=>{
//     if(age>=18){
//       return "Watch Now";
//     }
//     return "Not Available";
//   }
  
  
  
    // let canWatch="Not Available";
    // if(age>=18){
    //   canWatch="Watch Now";
    // }
  
    
    // if(age<18){
    //   return(
  
    //     <div>
        
    //     <div>
    //       <img src="queenOfTears.jpeg" alt="" width="20%" />
    //     </div>
    //     <h2>Name: {name}</h2>
    //     <h3>Rating: {rating}</h3>
    //     <p>Summary:{summery}</p>;
    //     <h3>Genre: {genere()}</h3>
    //     <button>Not available</button>
    //     </div>
    //   )
    // }
  
  
  
//     return(
  
//       <div>
      
//       <div>
//         <img src="queenOfTears.jpeg" alt="" width="20%" />
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating: {rating}</h3>
//       <p>Summary:{summery}</p>;
//       <h3>Genre: {genere()}</h3>
//       {/* <button>{age>=18?"Watch Now":"Not Available"}</button> */}
//       {/* <button>{canWatch}</button> */}
//       <button>{canWatch()}</button>
//       </div>
//     )
  
  
//   };


//   export default NetflixSeries




import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((series, index) => (
        <li key={index}>
          <div>
            <img
              src={series.img_url || "https://via.placeholder.com/150"}
              alt={series.name}
              width="200"
            />
          </div>
          <h2>Name: {series.name}</h2>
          <h3>Rating: {series.rating}</h3>
          <p>Summary: {series.description}</p>
          <h3>Genre: {series.genre.join(", ")}</h3>
          <p>Cast: {series.cast.join(", ")}</p>
          <a href={series.watch_url} target="_blank" rel="noopener noreferrer">
            <button>Watch Now</button>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NetflixSeries;
