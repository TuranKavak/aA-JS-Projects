import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';


class StepList extends React.Component {

    render() {
        const { steps, todo_id, receiveStep } = this.props;
        const stepItems = steps.map(step => (
            <StepListItemContainer
                key={step.id}
                step={step}
                />
        ));

        return (
            <div>
                <ul className="step-list">
                    {stepItems}
                </ul>
                <StepForm todo_id={todo_id} receiveStep={receiveStep} />
            </div>
        );
    }
}

export default StepList;
