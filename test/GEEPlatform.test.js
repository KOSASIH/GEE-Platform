const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('GEEPlatform', function () {
  let GEEPlatform, geePlatform, owner, addr1, addr2, addrs;

  beforeEach(async function () {
    GEEPlatform = await ethers.getContractFactory('GEEPlatform');
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    geePlatform = await GEEPlatform.deploy();
    await geePlatform.deployed();
  });

  describe('Deployment', function () {
    it('Should set the right owner', async function () {
      expect(await geePlatform.owner()).to.equal(owner.address);
    });

    it('Should assign the total supply of tokens to the owner', async function () {
      const ownerBalance = await geePlatform.balanceOf(owner.address);
      expect(await geePlatform.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe('Transactions', function () {
    it('Should transfer tokens between accounts', async function () {
      await geePlatform.transfer(addr1.address, 50);
      const addr1Balance = await geePlatform.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      await addr1.sendTransaction({
        to: geePlatform.address,
        value: ethers.utils.parseEther('0.1')
      });
      await geePlatform.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await geePlatform.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

    it('Should fail if sender doesn’t have enough tokens', async function () {
      const initialOwnerBalance = await geePlatform.balanceOf(owner.address);

      await expect(
        geePlatform.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith('Not enough tokens');

      expect(await geePlatform.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });
  });
});
