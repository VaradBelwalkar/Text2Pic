const { Configuration, OpenAIApi } = require("openai");

let str = process.env.OPENAI_API_KEY;
str = str.replace(/\r?\n|\r/g, "");


const configuration = new Configuration({
  apiKey: str
});
const openai = new OpenAIApi(configuration)

const generateImage = async (req, res) => {
    const { prompt } = req.body;
    

  try {
    const response = await openai.createImage({
        prompt,
        n: 2,
        size: "512x512"
    });
    const image_result = response.data.data;
    res.status(200).json({
      success: true,
      data: image_result
    });
  } catch(error) {
    console.log(error)
  }
}
module.exports = { generateImage };