export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <>
  <p>{props.crd}</p>
  <p>{props.name}</p>
  <p>{props.grd}</p>
  
  <button onClick = {() =>props.del(props.name)} > [DELETE] </button>
  </>;

}

