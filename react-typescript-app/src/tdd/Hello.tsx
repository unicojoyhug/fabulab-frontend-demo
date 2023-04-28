// export interface Props with name and enthusiasmlevel
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel }: Props) {
  return name + getExclamationMarks(enthusiasmLevel);
}

function Greeting({ name, enthusiasmLevel }: Props) {
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}, how are you doing {getQuestionMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

// return a number of exclamationMarks by enthusiasmLevel
function getExclamationMarks(enthusiasmLevel?: number) {
  return getMarks("!", enthusiasmLevel);
}

// return a number of questionMarks by enthusiasmLevel
function getQuestionMarks(enthusiasmLevel?: number) {
  return getMarks("?", enthusiasmLevel);
}

// return a number of given marks by enthusiasmLevel
function getMarks(marks: string, enthusiasmLevel?: number) {
  if (enthusiasmLevel === undefined || enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }
  return marks.repeat(enthusiasmLevel);
}

export { getExclamationMarks, getQuestionMarks, Greeting, Hello };