import Home from './Pages/Home';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [students, setStudents] = useState([
        { id: 1, name: "Alice Johnson", age: 20, course: "Mathematics", image: "https://randomuser.me/api/portraits/women/68.jpg" },
        { id: 2, name: "Bob Smith", age: 22, course: "Science", image: "https://randomuser.me/api/portraits/men/15.jpg" },
        { id: 3, name: "Charlie Brown", age: 21, course: "Literature", image: "https://randomuser.me/api/portraits/men/31.jpg" },
        { id: 4, name: "Diana Prince", age: 23, course: "History", image: "https://randomuser.me/api/portraits/women/52.jpg" },
        { id: 5, name: "Ethan Hunt", age: 20, course: "Engineering", image: "https://randomuser.me/api/portraits/men/33.jpg" },
        { id: 6, name: "Fiona Gallagher", age: 22, course: "Art", image: "https://randomuser.me/api/portraits/women/79.jpg" }
    ]);

    return (
        <div className="App">
            <h1>Students List</h1>
            <div className="row">
                {students.map((student) => (
                    <div key={student.id} className="col-md-3 mb-4">
                        <div className="card">
                            <img src={student.image} className="card-img-top" alt={student.name} />
                            <div className="card-body">
                                <h5 className="card-title">{student.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{student.age} years old</h6>
                                <p className="card-text">{student.course}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
