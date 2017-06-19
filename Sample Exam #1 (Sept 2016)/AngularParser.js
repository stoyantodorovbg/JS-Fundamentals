/**
 * Created by Stoyan on 17.6.2017 г..
 */
function parse (arr) {
    let apps = [];

    for (let row of arr) {
        if (row.match(/\$app=/)) {
            let rowArr = row.split('=');
            rowArr[1] = rowArr[1].replace(/'/g, '');
            let obj = {app: rowArr[1]};
            apps.push(obj);
        }
    }

    for (let i = 0; i < apps.length; i++) {
        apps[i].controllers = [];
        apps[i].models = [];
        apps[i].views = [];
    }

    for (let row of arr) {
        for (let i = 0; i < apps.length; i++) {
            let regApp = new RegExp(`${apps[i].app}`);
            if (row.match(regApp)) {
                let rowArr = row.split('&');
                if (rowArr[0].match(/\$controller=/)) {
                    let controller = rowArr[0].match(/'.+'/);
                    controller = controller.toString().replace(/'/g, '');
                    apps[i].controllers.push(controller);
                } else if (rowArr[0].match(/\$model=/)) {
                    let model = rowArr[0].match(/'.+'/);
                    model = model.toString().replace(/'/g, '');
                    apps[i].models.push(model);
                } else if (rowArr[0].match(/\$view=/)) {
                    let view = rowArr[0].match(/'.+'/);
                    view = view.toString().replace(/'/g, '');
                    apps[i].views.push(view);
                }
            }
        }
    }

    apps = apps.sort((a, b) => b.controllers.length - a.controllers.length ||
    a.models.length - b.models.length);

    for (let i = 0; i < apps.length; i++){
        apps[i].controllers.sort((a, b) => a > b);
        apps[i].models.sort((a, b) => a > b);
        apps[i].views.sort((a, b) => a > b);
    }

    let obj = {};
    for (let i = 0; i < apps.length; i++) {

        let appName = apps[i].app;
        obj[`${appName}`] = apps[i];
        delete obj[`${appName}`].app;
    }

    console.log(JSON.stringify(obj));
}

parse([
    "$controller='PHPController'&app='Language Parser'",
    "$controller='JavaController'&app='Language Parser'",
    "$controller='C#Controller'&app='Language Parser'",
    "$controller='C++Controller'&app='Language Parser'",
    "$app='Garbage Collector'",
    "$controller='GarbageController'&app='Garbage Collector'",
    "$controller='SpamController'&app='Garbage Collector'",
    "$app='Language Parser'"

]);
