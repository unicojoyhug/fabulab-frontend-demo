// export interface Props with name and enthusiasmlevel
export interface Props {
    name: string;
    enthusiasmLevel?: number | undefined;
}

function Hello({ name, enthusiasmLevel }: Props) {
    if (enthusiasmLevel === undefined || enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }
  
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
  }