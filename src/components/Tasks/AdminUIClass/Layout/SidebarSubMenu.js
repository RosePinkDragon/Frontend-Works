import React from "react";

class SidebarSubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    return (
      <>
        {this.props.data && (
          <>
            <div className="subMenu">
              <p
                onClick={() =>
                  this.setState({ isActive: !this.state.isActive })
                }
              >
                {this.props.data.name}
              </p>
            </div>
            {this.state.isActive ? (
              <div className="subData">
                {this.props.data.options.map((option, idx) => (
                  <p
                    key={idx}
                    onClick={() =>
                      this.setState({ isActive: !this.state.isActive })
                    }
                  >
                    {option}
                  </p>
                ))}
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </>
    );
  }
}

export default SidebarSubMenu;
