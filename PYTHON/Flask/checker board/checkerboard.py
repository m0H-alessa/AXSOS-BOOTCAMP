from flask import Flask, render_template
app=Flask(__name__)
@app.route('/')
def first():
    return render_template("first.html")

@app.route('/4')
def second():
    return render_template("second.html")


@app.route('/<row>/<column>/')
def thrid(row, column):
    return render_template('thrid.html', row=int(row), column=int(column))

if __name__=="__main__":
    app.run(debug=True)