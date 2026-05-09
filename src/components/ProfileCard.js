function ProfileCard({ student, toggleActive }) {
  return (
    <div className="profile-card">
      <h2>{student.name}</h2>
      <h3>{student.track}</h3>
      <p>{student.bio}</p>
      
      <div className="skill-level">{student.skillLevel}</div>
      
      {student.isActive ? (
        <p className="status active">Active</p>
      ) : (
        <p className="status inactive">Inactive</p>
      )}
      
      <button 
        className="toggle-button"
        onClick={() => toggleActive(student.id)}
      >
        {student.isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}

export default ProfileCard;
