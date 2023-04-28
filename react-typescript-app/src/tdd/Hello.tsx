// export interface Props with name and enthusiasmlevel
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel }: Props) {
  let greetings = "Hello " +  name + getExclamationMarks(enthusiasmLevel) + " How are you doing"+ getQuestionMarks(enthusiasmLevel);
  return (
    <div className="hello">
      <div className="greeting">
      {greetings}
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

export { getExclamationMarks, getQuestionMarks, Hello };