class SignupFormThirdParty
  include ActiveModel::Validations
  include ActiveModel::Conversion
  
  attr_accessor :email, :name, :username, :provider, :provider_username, :terms_of_service
  validates_presence_of :email, :username, :provider, :provider_username
  validates_presence_of :terms_of_service, :message => 'must be agree to.'
  validates_format_of :email, :with => /\A[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\z/
  validates_format_of :username, :without => /[@\s\.]/, :message => 'cannot contain spaces, periods or @.'
  validates_length_of :username, :maximum => 25
  
  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end

    # for twitter and github use their username
    if ['github','twitter'].include?(:provider)
      send("provider_username=", username)
    else
      send("provider_username=", email) unless attributes.has_key?('provider_username')
    end
    
  end
  
  def persisted?
    false
  end
  
end