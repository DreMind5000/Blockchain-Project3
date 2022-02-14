import { ethers } from "ethers";
import { useState } from "react";
import Web3Modal from "web3modal";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { nftaddress, nftmarketaddress } from "../config";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import { useRouter } from "next/router";
import Enjoymint from "../artifacts/contracts/Enjoymint.sol/Enjoymint.json";
import ReactAudioPlayer from "react-audio-player";

// in this component we set the ipfs up to host our nft data of
// file storage

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

export default function MintItem() {
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });
  const router = useRouter();

  // set up a function to fireoff when we update files in our form - we can add our
  // NFT images - IPFS

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  }

  async function onChangeAudio(e) {
    const file = e.target.files[0];
    try {
      setLoading(true);
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setAudioUrl(url);
      setLoading(false);
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  }
  async function createMarket() {
    const { name, description, price } = formInput;

    if (name === "" || name === null) {
      window.alert("Please Enter a Name!");
    } else if (price === "" || price === null) {
      window.alert("Please Enter a Price!");
    } else if (!fileUrl) {
      window.alert("Please Select Your Art!");
    } else if (description === "" || description === null) {
      window.alert("Please Enter Description!");
    }

    if (!name || !description || !price || !fileUrl) return;
    // upload to IPFS
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
      audio: audioUrl,
    });
    console.log(data, "here uploaded data");
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // run a function that creates sale and passes in the url
      createSale(url);
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  }

  async function createSale(url) {
    // create the items and list them on the marketplace
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    // we want to create the token
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    let transaction = await contract.mintToken(url);
    let tx = await transaction.wait();
    let event = tx?.events[0];
    let value = event?.args[2];
    let tokenId = value?.toNumber();
    console.log(tx, event, value, "All Data");

    const price = ethers.utils.parseUnits(formInput.price, "ether");

    // list the item for sale on the marketplace
    contract = new ethers.Contract(nftmarketaddress, Enjoymint.abi, signer);
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    transaction = await contract.makeMarketItem(nftaddress, tokenId, price, {
      value: listingPrice,
    });
    await transaction.wait();
    router.push("./");
  }
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-medium ">
            Create Item
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a className="font-medium text-indigo-600 hover:text-indigo-500">
              GET STARTED
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl border rounded-xl">
          <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-full flex flex-col pb-5">
                  <label htmlFor="email" className="pt-4 pb-1 block text-md">
                    Name
                  </label>
                  <input
                    placeholder="Asset Name"
                    className="bg-gray-100 p-3 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                  <label htmlFor="email" className="pt-4 pb-1 block text-md">
                    Price
                  </label>
                  <input
                    placeholder="Asset Price in Matic"
                    className="bg-gray-100 p-3 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, price: e.target.value })
                    }
                  />
                  <label htmlFor="email" className="pt-4 pb-1 block text-md ">
                    Select Your Art
                  </label>
                  <input
                    type="file"
                    name="Asset"
                    className="bg-gray-100  shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none"
                    onChange={onChange}
                  />
                  <label htmlFor="email" className="pt-4 pb-1 block text-md ">
                    Select Audio
                  </label>
                  <input
                    type="file"
                    name="Asset"
                    className="bg-gray-100  shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none"
                    onChange={onChangeAudio}
                    accept="audio/mp3,audio/*;capture=microphone"
                  />
                  <label htmlFor="email" className="pt-4 pb-1 block text-md">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Asset Description"
                    className="p-3 bg-gray-100  shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none"
                    onChange={(e) =>
                      updateFormInput({
                        ...formInput,
                        description: e.target.value,
                      })
                    }
                  />
                  {loading ? <p>Please Wait your Audio is processing </p> : ""}
                  {audioUrl ? (
                    <>
                      <>
                        <ReactAudioPlayer
                          style={{ width: "100%" }}
                          src={audioUrl}
                          // autoPlay
                          controls
                        />
                      </>
                    </>
                  ) : (
                    ""
                  )}
                  {fileUrl && (
                    <img className="rounded mt-4" width="350px" src={fileUrl} />
                  )}
                  <button
                    onClick={createMarket}
                    className="font-bold mt-4 bg-indigo-700 text-white rounded p-4 shadow-lg"
                  >
                    Mint NFT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
