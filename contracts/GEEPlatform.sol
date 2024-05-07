// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";

contract GEEPlatform is Initializable, OwnableUpgradeable, PausableUpgradeable {
    using SafeMathUpgradeable for uint256;

    string public name = "GEE Platform";
    string public symbol = "GEE";
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function initialize(string memory _name, string memory _symbol, uint256 _initialSupply) public initializer {
        __Ownable_init();
        __Pausable_init();
        name = _name;
        symbol = _symbol;
        totalSupply = _initialSupply;
        balanceOf[msg.sender] = _initialSupply;
    }

    function transfer(address to, uint256 value) external returns (bool success) {
        _transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) external returns (bool success) {
        _approve(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) external returns (bool success) {
        _transfer(from, to, value);
        _approve(from, msg.sender, _allowance(from, msg.sender).sub(value));
        return true;
    }

    function mint(address to, uint256 value) external onlyOwner {
        totalSupply = totalSupply.add(value);
        balanceOf[to] = balanceOf[to].add(value);
        emit Transfer(address(0), to, value);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function _transfer(address from, address to, uint256 value) internal {
        require(balanceOf[from] >= value, "Insufficient balance");
        require(to != address(0), "Invalid address");
        balanceOf[from] = balanceOf[from].sub(value);
        balanceOf[to] = balanceOf[to].add(value);
        emit Transfer(from, to, value);
    }

    function _approve(address owner, address spender, uint256 value) internal {
        require(owner != address(0), "Invalid address");
        require(spender != address(0), "Invalid address");
        allowance[owner][spender] = value;
        emit Approval(owner, spender, value);
    }

    function _allowance(address owner, address spender) internal view returns (uint256) {
        return allowance[owner][spender];
    }
}
