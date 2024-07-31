import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import images from '../assets/profile.png';
import national from '../assets/national.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    {
      id: "200315711241",
      name: "W.A.A.T.Dilshan Perera",
      grade: "B+",
      projectResult: 60,
      paperResult: 71,
      totalResult: 68
    },
    {
      id: "200553103046",
      name: "K.Mithuni Bhagya Kavindi",
      grade: "C",
      projectResult: 60,
      paperResult: 42,
      totalResult: 47
    },
    {
      id: "982971381v",
      name: "Nandika Dasun Munasingha",
      grade: "A",
      projectResult: 78,
      paperResult: 74,
      totalResult: 75
    },
    {
      id: "898424170v",
      name: "B.M.A.Madusha Chamali Kumari",
      grade: "A",
      projectResult: 78,
      paperResult: 74,
      totalResult: 75
    },
    {
      id: "200359313075",
      name: "B.Chirani Devindi Fernando Manike",
      grade: "B",
      projectResult: 55,
      paperResult: 61,
      totalResult: 60
    },
    {
      id: "200627501733",
      name: "B.H Kaveesha Hirumal Piris",
      grade: "B",
      projectResult: 40,
      paperResult: 58,
      totalResult: 54
    },
    {
      id: "20368712142",
      name: "A.Ashini Moksha Ambepussa",
      grade: "A",
      projectResult: 74,
      paperResult: 75,
      totalResult: 75
    },
    {
      id: "200665004439",
      name: "W.Amandi Akarsha",
      grade: "C",
      projectResult: 42,
      paperResult: 48,
      totalResult: 47
    },
    {
      id: "200432602225",
      name: "W.A.D.Senura Akalanaka",
      grade: "A",
      projectResult: 65,
      paperResult: 78,
      totalResult: 75
    },
    {
      id: "200277402306",
      name: "M.D.Semini Kavindya",
      grade: "C",
      projectResult: 50,
      paperResult: 48,
      totalResult: 49
    },
    {
      id: "200379010077",
      name: "Tharushi Kishalka Kothalawala",
      grade: "B",
      projectResult: 55,
      paperResult: 62,
      totalResult: 60
    },
    {
      id: "198625602585",
      name: "W.P.Asitha Indika Perera",
      grade: "A",
      projectResult: 72,
      paperResult: 76,
      totalResult: 75
    },
    {
      id: "198676804883",
      name: "Hewa Geeganage Nadeesha Priyangani",
      grade: "B",
      projectResult: 70,
      paperResult: 53,
      totalResult: 57
    },
    {
      id: "200529303086",
      name: "J.A.Layan Sithmaka",
      grade: "B",
      projectResult: 50,
      paperResult: 58,
      totalResult: 56
    },
    {
      id: "958281250v",
      name: "S.D.Imasha Lakshani",
      grade: "A",
      projectResult: 80,
      paperResult: 73,
      totalResult: 75
    },
    {
      id: "200172501460",
      name: "D.A.Umanga Nethmini",
      grade: "C",
      projectResult: 60,
      paperResult: 42,
      totalResult: 47
    },
    {
      id: "200456612932",
      name: "K.A.Muthumali Uthpala ",
      grade: "B",
      projectResult: 68,
      paperResult: 47,
      totalResult: 52
    },
    {
      id: "200604403527",
      name: "N.P.Masith Hitharsha",
      grade: "B",
      projectResult: 60,
      paperResult: 46,
      totalResult: 50
    },
    {
      id: "200461304350",
      name: "M.D.Imalshi Savindi Dissanayaka",
      grade: "B",
      projectResult: 42,
      paperResult: 66,
      totalResult: 60
    },
    {
      id: "200321610377",
      name: "G.W.Samindu Laksitha",
      grade: "B+",
      projectResult: 55,
      paperResult: 71,
      totalResult: 67
    },
    {
      id: "200686401433",
      name: "S.H.Chamodya Sewwandi",
      grade: "C",
      projectResult: 60,
      paperResult: 44,
      totalResult: 48
    },
    {
      id: "200482900308",
      name: "J.A.Chamodi Randika",
      grade: "B",
      projectResult: 40,
      paperResult: 60,
      totalResult: 55
    },
    {
      id: "200305200071",
      name: "M.Risith Chanuka Salgadu",
      grade: "C",
      projectResult: 50,
      paperResult: 49,
      totalResult: 49
    },
    {
      id: "200676602453",
      name: "Y.Jayodya Nishani Silva",
      grade: "B",
      projectResult: 52,
      paperResult: 57,
      totalResult: 56
    },
    {
      id: "200355113157",
      name: "P.W.Sadali Premachandra",
      grade: "B",
      projectResult: 42,
      paperResult: 57,
      totalResult: 53
    },
    {
      id: "200526405501",
      name: "H.P.C.N.N.Perera",
      grade: "B",
      projectResult: 50,
      paperResult: 59,
      totalResult: 57
    },
    {
      id: "200214801349",
      name: "M.Nimesh Sandaruwan Fernando",
      grade: "B+",
      projectResult: 55,
      paperResult: 68,
      totalResult: 65
    },
    {
      id: "200453200052",
      name: "Vinodya Himashi Kahawalage",
      grade: "B",
      projectResult: 40,
      paperResult: 64,
      totalResult: 58
    },
    {
      id: "199154701900",
      name: "K.Supuni Sandeepika",
      grade: "C",
      projectResult: 45,
      paperResult: 44,
      totalResult: 44
    },
    {
      id: "200457510858",
      name: "Gayesha Buddini Walpita",
      grade: "C",
      projectResult: 44,
      paperResult: 41,
      totalResult: 42
    },
    {
      id: "200466801067",
      name: "W.K.Senuthi Wansinee",
      grade: "B+",
      projectResult: 45,
      paperResult: 73,
      totalResult: 66
    },
    {
      id: "200472904229",
      name: "Y.Thihansa Devini",
      grade: "B",
      projectResult: 58,
      paperResult: 66,
      totalResult: 64
    },
    {
      id: "200484700721",
      name: "M.H.Sanduni Madhushika",
      grade: "C",
      projectResult: 43,
      paperResult: 46,
      totalResult: 45
    },
    {
      id: "200710305617",
      name: "H.D.M.Naloj Sakura",
      grade: "B",
      projectResult: 41,
      paperResult: 54,
      totalResult: 51
    },
    {
      id: "200170301444",
      name: "S.D.Tharaka Dinithi",
      grade: "B+",
      projectResult: 60,
      paperResult: 67,
      totalResult: 65
    },
    {
      id: "200631502213",
      name: "H.Naveen Chathuneth",
      grade: "B",
      projectResult: 48,
      paperResult: 51,
      totalResult: 50
    },
    {
      id: "197226900907",
      name: "W.A.Saman Chandana",
      grade: "A",
      projectResult: 70,
      paperResult: 81,
      totalResult: 78
    },
    {
      id: "706062653v",
      name: "M.A.D.Sriyani Kularathna",
      grade: "A",
      projectResult: 68,
      paperResult: 78,
      totalResult: 76
    },
    {
      id: "198980000036",
      name: "T.Nimesha Peiris",
      grade: "C",
      projectResult: 40,
      paperResult: 50,
      totalResult: 48
    },
    {
      id: "855580977v",
      name: "Dinusha Madhavi Gomes",
      grade: "B+",
      projectResult: 60,
      paperResult: 66,
      totalResult: 65
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.id === username);
    if (user) {
      navigate(`/profile/${user.id}`, { state: { user } });
    } else {
      setError('Invalid User ID');
    }
  };

  return (
    <>

    <div className='row logo-card'>
        <div className='header-logo'>
          <div className='logo-container'>
              <img className='logo' src={national} />
       
          </div>
        
            <div>
              <h2 className='text-center text-dark mt-3'>National Productivity Secretariat</h2>
              <h4>Divisional Secretariat Panadura</h4>
              <h5>Basic Certificate Course In Productivity and Innovation 2024</h5> 
            </div>

        </div>
      </div>


      <div className="row profile-card">
        <div className="">
          <div className="card my-3">
            <form className="card-body cardbody-color p-lg-6" onSubmit={handleSubmit}>
              <div className="text-center">
                <img src={images} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px" alt="profile" />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {error && <div className="text-danger text-center mb-3">{error}</div>}
              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
