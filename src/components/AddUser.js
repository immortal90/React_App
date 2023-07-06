import React from "react";

class AddUser extends React.Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      bio: "",
      age: 1,
      isHappy: false,
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="Ім'я"
          onChange={(e) => this.setState({ firs_tname: e.target.value })}
        />
        <input
          placeholder="Прізвище"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <textarea
          placeholder="Пошта"
          onChange={(e) => this.setState({ bio: e.target.value })}
        />
        <input
          placeholder="Фото"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Щасливий?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.userAdd = {
              first_name: this.state.firs_tname,
              last_name: this.state.last_name,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            };
            if (this.props.user) this.userAdd.id = this.props.user.id;
            this.props.onAdd(this.userAdd);
          }}
        >
          Добавити
        </button>
      </form>
    );
  }
}

export default AddUser;
