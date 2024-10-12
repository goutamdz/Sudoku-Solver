
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set("view-engine","ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

// Route to handle the form submission
app.post('/solve', (req, res) => {
    const sudokuBoard = req.body.box;
    
    let board=Array();
    let start=0;
    let end=9;
    while(end<=81){
        let row = sudokuBoard.slice(start, end).map(val => val === '' ? '.' : val);
        board.push(row);
        start+=9;
        end+=9;
    }

    console.log(isSudoku(board));
    if (!isSudoku(board)) {
        return res.render("index.ejs", { errorMessage: "* Sudoku can't be solved with given data" });
    }


    let ans=Sudoku(board);
    ans.forEach(ele=>{
        ele.forEach(iele=>{
            console.log(iele.join(" "));
        })
        console.log("\n");
    })

    // console.table(board);
    res.render("show.ejs",{ans,i:0});
    // res.send('Sudoku board received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
