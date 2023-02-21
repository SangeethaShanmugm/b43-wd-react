export function ColorBox({ color }) {
  const styles = {
    width: "300px",
    height: "40px",
    backgroundColor: color,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
