class TrailDescriptor < ApplicationRecord
    validates :trail_id, :descriptor_id, presence: true 

    belongs_to :trail

    belongs_to :descriptor


end