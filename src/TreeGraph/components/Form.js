import React from "react";
import * as actions from "../store/actions.js";
import { connect } from "react-redux";

import "./../../styles/treegraph.scss";

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNumbers: () => dispatch(actions.toggleNumbers()),
        updateTreeType: (payload) => dispatch(actions.updateTreeType(payload)),
        updateNumNodes: (payload) => dispatch(actions.updateNumNodes(payload)),
    };
};

const mapStateToProps = (state) => {
    return {
        state: state,
        treeType: state.treeType,
        numberOfNodes: state.numberOfNodes,
    };
};

class Form extends React.Component {
    state = {};

    componentDidMount() {
        this.setState({ numberOfNodes: this.props.numberOfNodes });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleToggleNumbers = (e) => {
        this.props.toggleNumbers();
    };
    handleAddNode = () => {
        this.props.addNode(this.state.nodeValueInsert);
    };
    handleAddRandomNode = () => {
        this.props.addRandomNode();
    };
    handleRemoveNode = () => {
        this.props.removeNode(this.state.nodeValueRemove);
    };
    handleRemoveRoot = () => {
        this.props.removeRoot();
    };
    setTreeType = async (e) => {
        let treeType = e.target.name;
        await this.props.updateTreeType(treeType);
        this.handleGenerateTree();
        console.log(`setting tree type: ${treeType}`);
    };
    handleGenerateTree = async () => {
        await this.props.updateNumNodes(this.state.numberOfNodes);
        this.props.generateTree();
    };
    handleResetTree = () => {
        this.props.resetTree();
    };
    handleFindMaxValue = () => {
        this.setState({ maxValue: this.props.findMax() });
    };
    handleFindMinValue = () => {
        this.setState({ minValue: this.props.findMin() });
    };
    handleContains = () => {
        let contains = this.props.contains(this.state.containsValue);
        if (contains) {
            this.setState({ contains: "true" });
        } else {
            this.setState({ contains: "false" });
        }
    };
    handlePrintPreOrder = () => {
        let res = this.props.printPreOrder();
        res = res.toString();
        this.setState({ printPreOrderString: res });
    };
    handlePrintInOrder = () => {
        let res = this.props.printInOrder();
        res = res.toString();
        this.setState({ printInOrderString: res });
    };
    handlePrintPostOrder = () => {
        let res = this.props.printPostOrder();
        res = res.toString();
        this.setState({ printPostOrderString: res });
    };

    getSelected = (treeType) => {
        if (treeType === this.props.treeType) {
            return "selected";
        }
        return "";
    };

    // setTreeType = async (e) => {
    //     let treeType = e.target.name;
    //     await this.props.updateTreeType(treeType);
    //     this.handleGenerateTree();
    //     console.log(`setting tree type: ${treeType}`);
    // };

    render() {
        return (
            <div className="treegraph-form">
                <div className="form-title">Control Panel</div>
                <div className="scrollzone">
                    <section>
                        <div className="form-header">Select tree type</div>
                        <button
                            className={this.getSelected("AVLTree")}
                            name="AVLTree"
                            onClick={this.setTreeType}
                        >
                            AVL Tree
                        </button>
                        <button
                            className={this.getSelected("BinarySearchTree")}
                            name="BinarySearchTree"
                            onClick={this.setTreeType}
                        >
                            Binary Search Tree
                        </button>
                        <button
                            className={this.getSelected("SplayTree")}
                            name="SplayTree"
                            onClick={this.setTreeType}
                        >
                            Splay Tree
                        </button>
                        <button
                            className={this.getSelected("RedBlackTree")}
                            name="RedBlackTree"
                            onClick={this.setTreeType}
                        >
                            Red Black Tree
                        </button>
                    </section>

                    <section>
                        <div className="form-header">Generate random tree</div>
                        <input
                            placeholder="Number of nodes"
                            name="numberOfNodes"
                            defaultValue="10"
                            onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleGenerateTree}>Generate</button>
                        <button onClick={this.handleResetTree}>Reset</button>
                    </section>

                    <section>
                        <div className="form-header">Add a node</div>
                        <input
                            placeholder="Node value"
                            name="nodeValueInsert"
                            onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleAddNode}>Add Node</button>
                        <button onClick={this.handleAddRandomNode}>Add Random Node</button>
                    </section>

                    <section>
                        <div className="form-header">Remove a node</div>
                        <input
                            placeholder="Node value"
                            name="nodeValueRemove"
                            onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleRemoveNode}>Remove Node</button>
                        <button onClick={this.handleRemoveRoot}>Remove Root</button>
                    </section>

                    <section>
                        <button onClick={this.handleFindMaxValue}>Find max value</button>
                        <div className="dataOutput">Max: {this.state.maxValue}</div>
                        <button onClick={this.handleFindMinValue}>Find min value</button>
                        <div className="dataOutput">Min: {this.state.minValue}</div>
                    </section>

                    <section>
                        <div className="form-header">Contains:</div>
                        <input
                            placeholder="Node value"
                            name="containsValue"
                            onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleContains}>check</button>
                        <div className="dataOutput">Contains? {this.state.contains}</div>
                    </section>

                    <section>
                        <div className="form-header">Print:</div>
                        <button onClick={this.handlePrintPreOrder}>Pre order</button>
                        <div className="dataOutput">
                            Pre order: {this.state.printPreOrderString}
                        </div>
                        <button onClick={this.handlePrintInOrder}>In order</button>
                        <div className="dataOutput">In order: {this.state.printInOrderString}</div>
                        <button onClick={this.handlePrintPostOrder}>Post order</button>
                        <div className="dataOutput">
                            Post order: {this.state.printPostOrderString}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
