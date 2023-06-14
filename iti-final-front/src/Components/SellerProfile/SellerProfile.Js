import React from 'react'

function SellerProfile() {
  return (
    
        <div className='profile-info '>
        <div className="container py-5">
  <div className="row">
    <div className="col-lg-4 ">
      <div className="card mb-4 ">
        <div className="card-body text-center shadow  bg-white rounded">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: 100 }}
          />
          <h5 className="my-3">محمد خالد</h5>
          <p className="text-muted mb-1">تاجر منتاجات أطفال</p>
          <p className="text-muted mb-4">القومية - الزقازيق</p>
          <div className="d-flex justify-content-center mb-2"></div>
        </div>
      </div>
    </div>
    <div className="col-lg-8">
      <div className="card mb-4">
        <div className="card-body shadow  bg-white rounded">
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">الأسم </p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">محمد خالد</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">الحساب</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">example@example.com</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">رقم الهاتف</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">(097) 234-5678</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">العنوان</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">القومية - الزقازيق</p>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">عدد المنتاجات</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a><button className='btn btn-outline-primary'>أضف منتج جديد</button></a>
</div>

    </div>
  )
}

export default SellerProfile