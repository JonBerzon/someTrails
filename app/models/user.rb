class User < ApplicationRecord
    #figvaper

    attr_reader :password

    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, :fname, :lname, presence: true 
    validates :password, length: { minimum: 6 }, allow_nil: true
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } #validates email format
    after_initialize :ensure_session_token

    has_many :reviews

    

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end



end