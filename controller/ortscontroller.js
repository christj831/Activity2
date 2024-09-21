const main = {
    index:(req, res) => {
        res.render('index');
    },
    create:(req, res) => {
        res.render('create');
    },
    about:(req, res) => {
        res.render('about');
    },
    update:(req, res) => {
        res.render('update');
    },
    home:(req, res) => {
        res.render('home');
    },
};

module.exports = main;