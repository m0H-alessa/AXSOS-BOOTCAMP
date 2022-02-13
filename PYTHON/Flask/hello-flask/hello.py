from flask import Flask
app=Flask(__name__)
@app.route('/')
def hello():
    return 'Hello World'

@app.route('/dojo')
def dojo():
    return 'dojo'

@app.route('/say/<moh>')
def name(moh):
    return 'hi '+moh

@app.route('/repeat/<int:num>/<name>')
def repeat(num,name):
    return name*num

if __name__=="__main__":    
    app.run(debug=True)
