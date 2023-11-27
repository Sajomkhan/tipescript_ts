let studentAge = 12;
studentAge = 15;

let studentName: string = "Rahim";
studentName = "karim";

let testBoolean: boolean;
testBoolean = false;

// Multiple Types (Union Types)
let testStringOrNumber: string | number;

// -------------------------------------- Exclude  ---------------------------------------------------  //

type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType = Exclude<ShapeType, "cube">;

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

type ItemProps = {
    color: `${ThemeType}-${ColorType}`;
    color_2: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
  };

// ---------------------------------- Array type  ---------------------------------------------------  //
let fruitArray = ["apple", "orange", "orange"];
fruitArray.push(12, "banana");

const ageArray = [25, 32, 38, 40];
ageArray.push("name");

let fruitArray_1: number[];
let fruitArray_2: string[];
let fruitArray_3: (string | number)[];

// -------------------------------- Object type  --------------------------------------  //
type UserType = {
  id: number;
  name: string;
  email: string;
  phone?: string;
};

type UserType_2 = {
  id: number;
  name: string;
  email: string;
  theme: "dark" | "light";
};

const user: UserType = {
  id: 12,
  name: "saiful",
  email: "1349",
  // phine: '+088-01911977375'
};

const userTheme: UserType_2 = {
  id: 12,
  name: "saiful",
  email: "1349",
  theme: "light",
};

const userFunction = (user: UserType) => {
  console.log(user.name);
};

// ------------------------------------ function type  --------------------------------------------  //

// this function return void, number or string
type myfunc = (a: number, b: string) => void | number | string;

let newfunction: myfunc = (num, str) => {
  console.log(num + "time " + str);
};

// ----------------------------------- interface  ------------------------------------------------  //
// we use interface instead of type because can extends interface
interface IUser {
  id: number;
  name: string;
  email: string;
}
interface IEmployee extends IUser {
  employeeId: number;
}

const employeeDetails: IEmployee = {
  id: 1884,
  name: "Anything",
  email: "anything",
  employeeId: 1234,
};

// --------------------------------- interface ( not better ) --------------------------------------  //

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

// ----------------------------- interface ( better ) generics------------------------------------  //

// Generics
interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string | boolean> = {
  id: 134,
  title: "post title",
  desc: "post description",
  extra: ["test", 12, "any thing", true],
};

// ------------------------------ interface ( even better ) generics------------------------------------  //

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe_2: IPostEvenBetter<{ id: number; username: string }> = {
  id: 134,
  title: "post title",
  desc: "post description",
  extra: [
    { id: 1, username: "myname" },
    { id: 2, username: "yourname" },
  ],
};

const testMe_3: IPostEvenBetter<IAuthor> = {
  id: 134,
  title: "post title",
  desc: "post description",
  extra: [
    { id: 1, username: "myname" },
    { id: 2, username: "yourname", age: 23 },
  ],
};

const testMe_4: IPostEvenBetter<ICategory> = {
  id: 134,
  title: "post title",
  desc: "post description",
  extra: [
    { id: 1, title: "title for category" },
    { id: 2, username: "yourname" },
  ],
};


// --------------------------------- react-typescript-props -----------------------------------------------  //

interface IHeaderProps {}

export default Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (

  )  

// --------------------------------- props-react-typescript ------------------------------------------------  //

const ParentsPostCard = () => { return <ChildPostCard title:"post Title" desc:"post Desc" / > }

const ChildPostCard = (props: {title:string, desc:string}) => {}



// --------------------------------- props-react-typescript -----------------------------------------------  //

export type PostProps = { id: number; title: string; body: string };

// parents components
export default PostList = async () => {
// fetching data
const data: PostProps[] = await getData();
return (
  {data.map((post) => ( <PostCard key={post.id} {...post} /> ))}
)

// child components
export default PostCard = ({title,body}: PostProps) => {}


// ------------------------------ props-react-typescript-generic --------------------------------------  //

// Paretns
const ItemList = () => {
  return (<Item id={1}  title="post title"  extra={[ {id: 1, username: "john"}]} />)

// Child
type ItemProps<T extends User> = {
  id: number;
  title: string;
  extra: T[];
};
const Item = (props: ItemProps<{ id: number; username: string }>) => {
  return <div>Item</div>;
};


// ----------------------------------- react-typescript-props --------------------------------------  //

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return ()
  
// ----------------------------------- react-typescript --------------------------------------  //
export interface Note {
  id: string,
  title: string,
  text: string,
  color: string,
  date: string
}

import { Note } from ''

interface INotesProps {
  note: Note
  handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  return (
  )

// ----------------------------------- react-typescript --------------------------------------  //
export interface Note {
  id: string,
  title: string,
  text: string,
  color: string,
  date: string
}

const [notes, setNotes] = useState<Note[]>([{
  id: new Date().toString(),
  title: "Meeting",
  text: "UI/UX Team",
  color: "#dfdfdf",
  date: new Date().toString()
}])

// ----------------------------------- react-typescript --------------------------------------  //

interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes, setNotes }) => {
  const [error, setError] = React.useState<string>("")
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory")
    } else {
      setError("");
      setNotes([...notes, {
        id: (new Date()).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
      }])
    }
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  }


// ----------------------------------- react-typescript --------------------------------------  //
const renderNotes = ():JSX.Element[] => {
  return notes.map(note => {
    return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
  })
}

// ----------------------------------- react-typescript --------------------------------------  //
