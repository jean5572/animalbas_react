import Animal from "./Animal";

export default function AnimalsList(props) {
  const animalsComponents = props.animals.map((item) => <Animal {...item} key={item.name} />);
  return <>{animalsComponents}</>;
}
