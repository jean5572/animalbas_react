export default function Animal(props) {
  return (
    <tr>
      <td className="star">⭐️</td>
      <td>{props.name}</td>
      <td>{props.type}</td>
      <td>{props.description}</td>
      <td>{props.age}</td>
    </tr>
  );
}
