# Imgur Uploader

Script to upload images using [Imgur Image Upload API](https://apidocs.imgur.com/#c85c9dfc-7487-4de2-9ecd-66f727cf3139) from an HTML form using Javascript.

## How to set up?

Download ImgurUploader.js file to your project.

On your form, set 'img-input' as the `<input type="file">`'s ID. 

On your script.js file (or equivalent), import the ImgurUploader class (e.g. "import ImgurUploader from "./modules/imgurUploader.js" — but with your project's imgurUploader.js path).

Then, create a new ImgurUploader instance with the following parameters:

1. *formSelector*: the tag, class, id or other CSS selector to locate the form at the DOM with document.querySelector method;
2. *authorizationHeader*: your authorization info to the Imgur API, such as access token or cliend_id [(get more information here)](https://apidocs.imgur.com/#intro);
3. *bodyParams* (optional): an object on {"param_key", "param_value"} format with other parameters you might want to set (such as "album", "name", "title" etc). [You can check all available parameters by clicking here](https://apidocs.imgur.com/#intro).

Finally, init the uploader by setting ".init()" at the created ImgurUploader instance.

## For example:

### HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image upload</title>
</head>
<body>

    <form method="post" action="">
        <label for="img-input">Image:</label>
        <input id="img-input" accept="image/*" name="file" type="file">
        <input type="submit" value="Upload">
    </form>

    <script type="module" src="./script.js"></script>
</body>
</html>
```

### Javascript

```
import ImgurUploader from "./modules/imgurUploader.js";

const imgUploader = new ImgurUploader('form', "Bearer 5c192a336f3e377804b266451be24820871e6c2e", {"album": "jGLwJhc"});

imgUploader.init();
```

## How will it work?

When the form's submit button is clicked, ImgurUploader will prevent default's form behavior, then get the file set at `<input id="img-input" type="file">` field and finally send to Imgur over API by JS fetch.

By default, ImgurUploader will show the Imgur response at the console. The response includes the image id, the image URL and other useful information.

You can change this behavior by modifying "upload" method at imgurUploader.js file and so integrate it better to your project's needs.