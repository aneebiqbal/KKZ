// import axios from "axios";

// const useFetch = () => {
//   debugger;
//   const fetchData = async (textInput) => {
//     try {
//       const voiceCode = 'en-US-1';
//       const speed = '1.00';
//       const pitch = '1.00';
//       const outputType = 'audio_url';

//       const options = {
//         method: 'POST',
//         url: 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
//         headers: {
//           'content-type': 'application/x-www-form-urlencoded',
//           'X-RapidAPI-Key': '4b1842caa8msh832ff8149f1d145p1f1f0fjsn7cfb038cc6d1',
//           'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com',
//         },
//         data: `voice_code=${encodeURIComponent(voiceCode)}&text=${encodeURIComponent(textInput)}&speed=${encodeURIComponent(speed)}&pitch=${encodeURIComponent(pitch)}&output_type=${encodeURIComponent(outputType)}`,
//       };
//       debugger;
//       const response = await axios.request(options);
//       return response.data;
//     } catch (error) {
//       throw new Error('There was an error');
//     }
//   };

//   return { fetchData };
// };

// export default useFetch;



import axios from "axios";

const useFetch = () => {
  const fetchData = async (textInput) => {
    try {
      const options = {
        method: "POST",
        url: "https://text-to-speech-neural-google.p.rapidapi.com/generateAudioFiles",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "4b1842caa8msh832ff8149f1d145p1f1f0fjsn7cfb038cc6d1",
          "X-RapidAPI-Host": "text-to-speech-neural-google.p.rapidapi.com",
        },
        data: {
          audioFormat: "ogg",
          paragraphChunks: [textInput],
          voiceParams: {
            name: "Wavenet-B",
            engine: "google",
            languageCode: "en-IN",
          },
        },
      };
      const response = await axios.request(options);
      debugger;
      return response.data;
    } catch (error) {
      throw new Error("There was an error");
    }
  };

  return { fetchData };
};

export default useFetch
