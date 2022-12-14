const { ethers } = require('hardhat');
const { expect } = require('chai');

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether');
};

describe('Token', async () => {
	let token;

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token');
		token = await Token.deploy('Dapp University', 'DAPP', 1000000);
	});

	describe('Deployment', async () => {
		const name = 'Dapp University';
		const symbol = 'DAPP';
		const decimals = '18';
		const totalSupply = 1000000;

		it('has the correct name', async () => {
			expect(await token.name()).to.equal(name);
		});

		it('has the correct symbol', async () => {
			expect(await token.symbol()).to.equal(symbol);
		});

		it('has the correct decimals', async () => {
			expect(await token.decimals()).to.equal(decimals);
		});

		it('has the correct total supply', async () => {
			expect(await token.totalSupply()).to.equal(tokens(totalSupply));
		});
	});
});
