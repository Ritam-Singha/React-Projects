function Student(props) {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
    </div>
  );
}
Student.defaultProps = {
  name: "Guest",
  age: 0,
};
export default Student;
