// we want to load the users nfts and display

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Link from "next/link";
import ReactAudioPlayer from "react-audio-player";

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Enjoymint from "../artifacts/contracts/Enjoymint.sol/Enjoymint.json";
import Image from "next/image";
export default function AccountDashBoard() {
  // array of nfts
  const [nfts, setNFts] = useState([]);
  const [sold, setSold] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    // what we want to load:
    // we want to get the msg.sender hook up to the signer to display the owner nfts

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Enjoymint.abi,
      signer
    );
    const data = await marketContract.fetchItemsCreated();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        // we want get the token metadata - json
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          audio: meta.data.audio,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    // create a filtered aray of items that have been sold
    const soldItems = items.filter((i) => i.sold);
    setSold(soldItems);
    setNFts(items);
    setLoadingState("loaded");
  }

  if (loadingState === "loaded" && !nfts.length)
    return (
      <h1 className="px-20 py-7 text-4x1">You have not minted any NFTs!</h1>
    );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 style={{ fontSize: "20px", color: "purple" }}>Tokens Minted</h1>

        <Link href="/infographic">
          <button className="ml-5 mt-2 bg-black  py-2 px-7 text-white rounded-full flex  tracking-wider	 ">
            HOW TO ADD YOUR NFT TO METAMASK
          </button>
        </Link>
      </div>
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="relative cards  w-full shadow-lg  ">
              <div className="border rounded-2xl overflow-hidden">
                <div className=" ">
                  <p className="absolute top-0 right-0 rounded-full	 bg-white m-1.5 cursor-pointer">
                    <a
                      onClick={() => {
                        fetch(nft.image, {
                          method: "GET",
                          headers: {},
                        })
                          .then((response) => {
                            response.arrayBuffer().then(function (buffer) {
                              const url = window.URL.createObjectURL(
                                new Blob([buffer])
                              );
                              const link = document.createElement("a");
                              link.href = url;
                              link.setAttribute("download", "image.png"); //or any other extension
                              document.body.appendChild(link);
                              link.click();
                            });
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9 text-black p-1.5"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  </p>
                  <img
                    src={nft.image}
                    className=" h-48 object-cover w-full bg-gray-200 "
                  />
                </div>
                <div className="p-4">
                  <p
                    style={{ height: "40px" }}
                    className="text-3x1 font-semibold"
                  >
                    {nft.name}
                  </p>
                  <div style={{ minHeight: "20px", overflow: "hidden" }}>
                    <p className="text-gray-400">
                      {" "}
                      {nft.description.substring(0, 20)}
                      {nft.description.length > 20 ? "..." : ""}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-black mt-5">
                  <p className="text-3x-1 mb-4 font-bold text-white">
                    {nft.price} ETH
                  </p>
                </div>
              </div>
              <div
                className="border rounded-2xl overflow-hidden tracking-wider cursor-pointer rounded-lg bg-black-200 absolute top-0  w-full z-50  hoverCards"
                style={{ background: "white" }}
              >
                <div className="">
                  <p className="absolute top-0 right-0 rounded-full	 bg-white m-1.5 cursor-pointer">
                    <a
                      onClick={() => {
                        fetch(nft.image, {
                          method: "GET",
                          headers: {},
                        })
                          .then((response) => {
                            response.arrayBuffer().then(function (buffer) {
                              const url = window.URL.createObjectURL(
                                new Blob([buffer])
                              );
                              const link = document.createElement("a");
                              link.href = url;
                              link.setAttribute("download", "image.png"); //or any other extension
                              document.body.appendChild(link);
                              link.click();
                            });
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9 text-black p-1.5"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  </p>
                  <img
                    src={nft.image}
                    className=" h-48 object-cover w-full bg-gray-200 "
                  />
                </div>
                <div className="p-4">
                  <p
                    style={{ height: "40px" }}
                    className="text-3x1 font-semibold"
                  >
                    {nft.name}
                  </p>
                  <div style={{ minHeight: "20px", overflow: "hidden" }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div>
                  {nft?.audio ? (
                    <>
                      <ReactAudioPlayer
                        className="w-full"
                        src={nft.audio}
                        // autoPlay
                        controls
                      />
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className="p-4 bg-black mt-5">
                  <p className="text-3x-1 mb-4 font-bold text-white">
                    {nft.price} ETH
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
