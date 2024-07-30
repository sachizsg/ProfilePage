 import React from 'react'
 import './profile.css'
 import { useLocation, useNavigate } from 'react-router-dom';
 
 const Profile = () => {
    const location = useLocation();
    const { user } = location.state;
    const navigate = useNavigate();
   return (
     <>

        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        
                        <div class="profile-user-box card-box bg-custom">
                            <div class="row">
                                <div class="col-sm-6"><span class="float-left mr-3"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="thumb-lg rounded-circle"/></span>
                                    <div class="media-body text-white">
                                        <h4 class="mt-1 mb-1 font-18">{user.name}</h4>
                                        
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="text-right">
                                        <button type="button" class="btn btn-light waves-effect" onClick={()=>navigate(`/`)}><i class="mdi mdi-account-settings-variant mr-1"></i> Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-xl-3">
                        
                        <div class="card-box">
                            <h4 class="header-title mt-0">Personal Information</h4>
                            <div class="panel-body">
                                <div class="text-left">
                                    <p class="text-muted font-13"><strong>Full Name :</strong> <span class="m-l-15">{user.name}</span></p>

                                    <p class="text-muted font-13"><strong>Index Number :</strong> <span class="m-l-15">{user.id}</span></p>

                                    <p class="text-muted font-13"><strong>Grade :</strong> <span class="m-l-15">{user.grade}</span></p>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-xl-9">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card-box tilebox-one"><i class="icon-layers float-right text-muted"></i>
                                    <h6 class="text-muted text-uppercase mt-0">Project Result</h6>
                                    <h2 class="" data-plugin="counterup">{user.projectResult}</h2></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card-box tilebox-one"><i class="icon-layers float-right text-muted"></i>
                                    <h6 class="text-muted text-uppercase mt-0">Paper Result</h6>
                                    <h2 class="" data-plugin="counterup">{user.paperResult}</h2></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card-box tilebox-one"><i class="icon-layers float-right text-muted"></i>
                                    <h6 class="text-muted text-uppercase mt-0">Total Result</h6>
                                    <h2 class="" data-plugin="counterup">{user.projectResult+user.paperResult}</h2></div>
                            </div>
                        
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
   )
 }
 
 export default Profile