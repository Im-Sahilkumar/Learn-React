function Todo () {
    function callfun() {
        alert("Button clicked");
    }
    return (
        <div>
<h1>
    Sahil todo
</h1>
<img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" alt="Todo Image" 
className="picture"/>
<ul>
    <li>hey</li>
    <li>there</li>
    <li>hello</li>
</ul>
<button onClick={callfun}>Click Me</button>
        </div>
    );
}
export default Todo;